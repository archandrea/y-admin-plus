import { defineStore } from 'pinia'

interface SettingState {
  theme: string,
  tagBar: boolean,
  [prop: string]: any,
}

export const useSettingStore = defineStore('setting', {
  state: (): SettingState => {
    return {
      theme: 'dark',
      tagBar: true,
    }
  },
  actions: {
    changeSetting(data: { name: string, value: any }) {
      this[data.name] = data.value
    }
  }
})