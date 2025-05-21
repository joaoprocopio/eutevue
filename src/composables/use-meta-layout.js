import { computed, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'

import { isComp, isFn, isNil } from '~/utils/is'

export function useMetaLayout() {
  const route = useRoute()

  const RouterLayout = computed(() =>
    safeExtractComponent(route.meta.layout, {
      loadingComponent: safeExtractComponent(route.meta.layoutLoading),
      errorComponent: safeExtractComponent(route.meta.layoutError),
    }),
  )

  return RouterLayout
}

/**
 * Essa pequena função pode receber:
 *    - funções para lazy import (`async (...) => await import(...)`);
 *    - componentes importados, serão "short-circuitados" para serem renderizados diretamente;
 *    - `undefined` ou `null` para caso você queira ocultar o layout para a determinada rota.
 * @param {Omit<import("vue").AsyncComponentOptions, "loader" | "suspensible">} options
 */
function safeExtractComponent(component, options = {}) {
  switch (true) {
    case isNil(component):
      return undefined

    case isComp(component):
      return component

    case isFn(component):
      return defineAsyncComponent({
        ...options,
        suspensible: false,
        loader: component,
      })

    default:
      return undefined
  }
}
