/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { EIP712Base, EIP712BaseInterface } from "../EIP712Base";

const _abi = [
  {
    inputs: [],
    name: "ERC712_VERSION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getChainId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDomainSeperator",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "inited",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000805460ff1916905534801561001a57600080fd5b5061016e8061002a6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630f7e59701461005157806320379ee51461006f5780633408e4701461008457806343c885ba1461008c575b600080fd5b6100596100a1565b60405161006691906100e5565b60405180910390f35b6100776100be565b60405161006691906100dc565b6100776100c4565b6100946100c8565b60405161006691906100d1565b604051806040016040528060018152602001603160f81b81525081565b60015490565b4690565b60005460ff1681565b901515815260200190565b90815260200190565b6000602080835283518082850152825b81811015610111578581018301518582016040015282016100f5565b818111156101225783604083870101525b50601f01601f191692909201604001939250505056fea2646970667358221220de2e2908b95c88a6e5065f8bd024bb13ef06e817cca794a9ac3112e272ca0aed64736f6c63430008000033";

export class EIP712Base__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EIP712Base> {
    return super.deploy(overrides || {}) as Promise<EIP712Base>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): EIP712Base {
    return super.attach(address) as EIP712Base;
  }
  connect(signer: Signer): EIP712Base__factory {
    return super.connect(signer) as EIP712Base__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EIP712BaseInterface {
    return new utils.Interface(_abi) as EIP712BaseInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EIP712Base {
    return new Contract(address, _abi, signerOrProvider) as EIP712Base;
  }
}
