import PrestashopClientService from 'medusa-source-prestashop/src/services/prestashop-client';
import { ProductCollection, ProductCollectionService, TransactionBaseService } from '@medusajs/medusa';

import { Logger } from "@medusajs/medusa/dist/types/global";
import { EntityManager } from 'typeorm';

type InjectedDependencies = {
  prestashopClientService: PrestashopClientService;
  productCollectionService: ProductCollectionService;
  manager: EntityManager;
  logger: Logger;
}

class PrestashopCategoryService extends TransactionBaseService {
  protected manager_: EntityManager;
  protected transactionManager_: EntityManager;
  protected prestashopClientService_: PrestashopClientService;
  protected productCollectionService_: ProductCollectionService;
  protected logger_: Logger;

  constructor(container: InjectedDependencies, options) {
    super(container);

    this.logger_ = container.logger;
    this.manager_ = container.manager;
    this.prestashopClientService_ = container.prestashopClientService;
    this.productCollectionService_ = container.productCollectionService;
  }

  async create (category: any): Promise<void> {
    return this.atomicPhase_(async (manager) => {
      this.logger_.info("AND IN THE CAT SVC")
      
      //check if a collection exists for the category
      const existingCollection = await this.productCollectionService_
        .withTransaction(manager)
        .retrieveByHandle(this.getHandle(category.data.category))
        .catch(() => undefined);
      
      this.logger_.info(existingCollection)

      if (existingCollection) {
        return this.update(category, existingCollection)
      }
      

      //create collection
      const collectionData = this.normalizeCollection(category.data.category);
      await this.productCollectionService_
        .withTransaction(manager)
        .create(collectionData)
    })
  }

  async update (category: any, existingCollection: ProductCollection): Promise<void> {
    return this.atomicPhase_(async (manager) => {
      const collectionData = this.normalizeCollection(category.data.category);

      const update = {}

      for (const key of Object.keys(collectionData)) {
        if (collectionData[key] !== existingCollection[key]) {
          update[key] = collectionData[key]
        }
      }

      if (Object.values(update).length) {
        await this.productCollectionService_
            .withTransaction(manager)
            .update(existingCollection.id, update)
      }
    })
  }

  normalizeCollection (category: any): any {
    return {
      title: category.name,
      handle: category.link_rewrite,
      metadata: {
        prestashop_id: category.id
      }
    }
  }

  getHandle(category: any): string {
    return category.link_rewrite || ''
  }
}

export default PrestashopCategoryService;
