// 按需全局引入 vant组件
import Vue from 'vue'
import {
    Button,
    Cell,
    CellGroup,
    Icon,
    List,
    NavBar,
    NumberKeyboard,
    Overlay,
    PasswordInput,
    Popup,
    Search,
    Switch,
    Tab,
    Tabbar,
    TabbarItem,
    Tabs,
    Toast,
    Field,
    Form
} from 'vant'

const components = [Button, List, Cell, Tabbar, TabbarItem, Icon, NavBar, Switch, Tabs, Tab, Cell, CellGroup, Search, PasswordInput, NumberKeyboard, Popup, Toast, Overlay,Field,Form ]
components.forEach(item => {
    Vue.use(item)
})
Vue.prototype.$toast = Toast
