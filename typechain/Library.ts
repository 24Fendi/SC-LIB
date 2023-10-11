/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common";

export declare namespace Library {
  export type LogStruct = {
    action: string;
    ISBN: AddressLike;
    success: boolean;
  };

  export type LogStructOutput = [
    action: string,
    ISBN: string,
    success: boolean
  ] & { action: string; ISBN: string; success: boolean };
}

export interface LibraryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addBook"
      | "admin"
      | "bookDetail"
      | "getBookByISBN"
      | "getLibraryLength"
      | "getLogs"
      | "removeBook"
      | "updateBook"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addBook",
    values: [AddressLike, string, BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "bookDetail",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getBookByISBN",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getLibraryLength",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getLogs", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeBook",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateBook",
    values: [AddressLike, string, BigNumberish, string]
  ): string;

  decodeFunctionResult(functionFragment: "addBook", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bookDetail", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getBookByISBN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLibraryLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getLogs", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "removeBook", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "updateBook", data: BytesLike): Result;
}

export interface Library extends BaseContract {
  connect(runner?: ContractRunner | null): Library;
  waitForDeployment(): Promise<this>;

  interface: LibraryInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  addBook: TypedContractMethod<
    [_ISBN: AddressLike, _title: string, _year: BigNumberish, _author: string],
    [void],
    "nonpayable"
  >;

  admin: TypedContractMethod<[], [string], "view">;

  bookDetail: TypedContractMethod<
    [arg0: AddressLike],
    [
      [string, string, bigint, string] & {
        ISBN: string;
        title: string;
        year: bigint;
        author: string;
      }
    ],
    "view"
  >;

  getBookByISBN: TypedContractMethod<
    [_ISBN: AddressLike],
    [[string, string, bigint, string]],
    "view"
  >;

  getLibraryLength: TypedContractMethod<[], [bigint], "view">;

  getLogs: TypedContractMethod<[], [Library.LogStructOutput[]], "view">;

  removeBook: TypedContractMethod<[_ISBN: AddressLike], [void], "nonpayable">;

  updateBook: TypedContractMethod<
    [_ISBN: AddressLike, _title: string, _year: BigNumberish, _author: string],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addBook"
  ): TypedContractMethod<
    [_ISBN: AddressLike, _title: string, _year: BigNumberish, _author: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "admin"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "bookDetail"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [
      [string, string, bigint, string] & {
        ISBN: string;
        title: string;
        year: bigint;
        author: string;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getBookByISBN"
  ): TypedContractMethod<
    [_ISBN: AddressLike],
    [[string, string, bigint, string]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getLibraryLength"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getLogs"
  ): TypedContractMethod<[], [Library.LogStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "removeBook"
  ): TypedContractMethod<[_ISBN: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateBook"
  ): TypedContractMethod<
    [_ISBN: AddressLike, _title: string, _year: BigNumberish, _author: string],
    [void],
    "nonpayable"
  >;

  filters: {};
}