/* eslint-disable */

import { createStore } from "vuex";
import http from '../http'

export const key = Symbol()

export default createStore({
  state: {
    Produto:[
      
  ],
      Carrinho:[
        
      ],
      Usuario:[
        {
          role:'user'
        }
      ]
  },
  getters: {
  },
  mutations: {
    'adicionarUsuario'(state,usuario){
      if(usuario.length == 0){
        return
      }
      state.Usuario = usuario
      console.log(state.Usuario)
      return usuario
    },
    'adicionarTodosProduto'(state,produto){
      state.Produto = produto
    },
    'adicionarTodosCarrinho'(state,carrinho){
      state.Carrinho = carrinho
    },
    'adicionarNoCarrinho'(state,carrinho){
      state.Carrinho.push(carrinho)
    },
    'atualizarCarrinho'(state,carrinho){
      const index = state.Carrinho.findIndex(item => item.id == carrinho.id)
      state.Carrinho[index] = carrinho
    },
    'removeCarrinho'(state,id){
      state.Carrinho = state.Carrinho.filter(item => item.id != id)
    },
    'removerTodosCarrinho'(state){
      state.Carrinho = {}
    }
  },
  actions: {
    'autenticar'({commit},usuario){
      return http.get(`Usuario?email=${usuario.email}&senha${usuario.senha}`)
    },
    'obterCarrinhos'({commit}){
      http.get('carrinho').then(
        resposta => {commit('adicionarTodosCarrinho',resposta.data)}
      )
    },
    'obterProdutos'({commit}){
      console.log('act')
      http.get('produto').then(
        resposta => {commit('adicionarTodosProduto',resposta.data)}
      )
    },
    'adicionarNoCarrinho'({commit}, carrinho){
      return http.post('carrinho',carrinho)
      .then(resposta =>
        commit('adicionarNoCarrinho', resposta.data)
    )
    },

    'atualizarCarrinho'({commit}, carrinho){
      console.log(carrinho)
      return http.put(`carrinho/${carrinho.id}`, carrinho)
      .then(() =>
        commit('atualizarCarrinho',carrinho)
      )
    },

    'removeCarrinho'({commit},id){
      return http.delete(`carrinho/${id}`)
      .then(() => commit('removeCarrinho',id))
    },

  },
  modules: {
  }
})
