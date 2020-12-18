import {
  Simple,
  Card,
  Collection,
  List,
  TypeOverride,
  Table,
  Image,
  Media,
  Suggestion,
  HtmlResponse,
  Expected,
} from './core/Interfaces';
import { GoogleAction } from './core/GoogleAction';
import { AskOutput, Handler, TellOutput } from 'jovo-core';
import { MediaResponse } from './modules/MediaResponse';
import { Transaction, PaymentOptions, OrderUpdate, OrderOptions } from './modules/Transaction';
import { SkuId } from './modules/Transaction';
import { PaymentParameters, PresentationOptions } from './modules/Transaction';
export {
  Transaction,
  RequirementsCheckResult,
  SupportedCardNetworks,
  PaymentOptions,
  OrderOptions,
  GoogleProvidedOptions,
  OrderUpdate,
} from './modules/Transaction';
export { GoogleAssistant, Config } from './GoogleAssistant';
export { GoogleAssistantTestSuite, Suggestion, Expected } from './core/Interfaces';
import { NextScene } from './core/Interfaces';
import { Order, OrderUpdateV3, Prompt } from './core/Interfaces';
export * from './core/Interfaces';
export * from './services/PushNotificationsApi';
export * from './visuals/BasicCard';

declare module 'jovo-core/dist/src/core/Jovo' {
  interface Jovo {
    $googleAction?: GoogleAction;

    /**
     * Returns googleAction instance
     * @returns {GoogleAction}
     */
    googleAction(): GoogleAction;

    /**
     * Type of platform is Google Action
     * @public
     * @return {boolean} isGoogleAction
     */
    isGoogleAction(): boolean;
  }
}

declare module 'jovo-core/dist/src/core/BaseApp' {
  /**
   * Sets google-assistant-conv handlers
   * @deprecated use this.setPlatformHandler('GoogleAssistant', ...handler) instead
   * @public
   * @param {*} handler
   */
  interface BaseApp {
    setGoogleAssistantHandler(...handler: Handler[]): this;
  }
}

declare module './core/GoogleAction' {
  interface GoogleAction {
    addFirstSimple(firstSimple: Simple): this;
    addLastSimple(lastSimple: Simple): this;
    addCard(card: Card): this;
    addBasicCard(basicCard: Card): this;
    addImage(image: Image): this;
    addImageCard(imageCard: Image): this;
    addTable(table: Table): this;
    addList(list: List): this;
    addCollection(collection: Collection): this;

    addTypeOverrides(typeOverrides: TypeOverride[]): this;
    setTypeOverrides(typeOverrides: TypeOverride[]): this;

    showBasicCard(basicCard: Card): this;
  }
}

declare module 'jovo-core/dist/src/Interfaces' {
  interface Output {
    GoogleAssistant: {
      tell?: TellOutput;
      ask?: AskOutput;
      firstSimple?: Simple;
      lastSimple?: Simple;
      card?: Card;
      image?: Image;
      table?: Table;
      list?: List;
      collection?: Collection;
      typeOverrides?: TypeOverride[];
      media?: Media;
      suggestions?: Suggestion[];
      nextScene?: NextScene;
      prompt?: Prompt;
      htmlResponse?: HtmlResponse;
      askPrompt?: {
        prompt: Prompt;
        reprompts?: Prompt[];
      };
      expected?: Expected;

      AskForDeliveryAddress?: {
        reason: string;
      };

      TransactionDecision?: {
        orderOptions?: OrderOptions;
        paymentOptions: PaymentOptions;
        proposedOrder: any; // tslint:disable-line
      };

      TransactionRequirementsCheck?: {};

      TransactionDigitalPurchaseRequirementsCheck?: {};

      TransactionOrder?: {
        order: Order;
        presentationOptions?: PresentationOptions;
        orderOptions?: OrderOptions;
        paymentParameters?: PaymentParameters;
      };

      TransactionOrderUpdate?: {
        orderUpdate: OrderUpdateV3;
      };

      OrderUpdate?: {
        orderUpdate: OrderUpdate;
        speech: string;
      };

      CompletePurchase?: {
        skuId: SkuId;
      };
    };
  }
}

declare module './core/GoogleAction' {
  interface GoogleAction {
    htmlResponse(obj: HtmlResponse): this;
  }
}

declare module './core/GoogleAction' {
  interface GoogleAction {
    $audioPlayer?: MediaResponse;
    $mediaResponse?: MediaResponse;

    audioPlayer(): MediaResponse | undefined;
    mediaResponse(): MediaResponse | undefined;
  }
}

declare module './core/GoogleAction' {
  interface GoogleAction {
    $transaction?: Transaction;
  }
}
