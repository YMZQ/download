import Vue from 'vue'
import Clipboard from 'clipboard'

// 复制剪切
function clipboardSuccess() {
    Vue.prototype.$toast({
        // message: i18n.t == 'cn' ? `复制成功` : `copy link success`,
        message: `复制成功`,
        type: 'success',
        duration: 1500
    })
}

function clipboardError() {
    Vue.prototype.$toast({
        message: 'Copy failed',
        // message: i18n.t === 'cn' ? '复制失败' : 'Copy failed',
        type: 'error'
    })
}

export default function handleClipboard(text, event) {
    const clipboard = new Clipboard(event.target, {
        text: () => text
    })
    clipboard.on('success', () => {
        clipboardSuccess()
        clipboard.off('error')
        clipboard.off('success')
        clipboard.destroy()
    })
    clipboard.on('error', () => {
        clipboardError()
        clipboard.off('error')
        clipboard.off('success')
        clipboard.destroy()
    })
    clipboard.onClick(event)
}
