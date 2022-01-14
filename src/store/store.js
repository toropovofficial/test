import { Module } from 'vuex-simple';
import TestModule from './modules/testStore';

export default class Store {
  @Module()
  IdUser = new TestModule()
}
