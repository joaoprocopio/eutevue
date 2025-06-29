<script setup lang="ts">
import {
  CalendarFold,
  CalendarPlus,
  CalendarSync,
  Hash,
  MoveRight,
} from "lucide-vue-next";

import { ShowPageName } from "~/lib/router/constants";
import { AspectRatio } from "~/lib/shadcn/ui/aspect-ratio";
import { type ShowStatus, type TShow, type TShowStatus } from "~/data/show/models";

defineProps<{
  show: TShow;
  status: (typeof ShowStatus)[TShowStatus];
}>();
</script>

<template>
  <RouterLink
    :key="show.id"
    :to="{ name: ShowPageName, params: { id: show.id } }"
    class="grid-template grid w-full gap-x-8 gap-y-4 px-6 py-4 hover:bg-secondary/50 hover:text-secondary-foreground"
  >
    <div class="area-thumbnail w-56">
      <AspectRatio :ratio="8 / 5" class="overflow-hidden rounded-lg">
        <img
          :src="show.thumbnail_url"
          class="h-full w-full bg-muted object-cover"
        />
      </AspectRatio>
    </div>

    <div class="grid-field area-id">
      <Hash class="grid-field-icon" />
      <span>{{ show.id }}</span>
    </div>

    <div class="grid-field area-periodo">
      <CalendarFold class="grid-field-icon" />

      <div class="flex items-center gap-x-2">
        <span>{{ show.periodo_start_at }}</span>
        <MoveRight class="h-5" />
        <span>{{ show.periodo_end_at }}</span>
      </div>
    </div>

    <div class="grid-field area-status">
      <component :is="status.icon" class="grid-field-icon" />
      <span>{{ status.title }}</span>
    </div>

    <div class="grid-field area-created-at">
      <CalendarPlus class="grid-field-icon" />
      <span>{{ show.created_at }}</span>
    </div>

    <div class="grid-field area-updated-at">
      <CalendarSync class="grid-field-icon" />
      <span>{{ show.updated_at }}</span>
    </div>
  </RouterLink>
</template>

<style scoped>
@reference "~/assets/styles/tailwind.css";

.grid-template {
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "thumbnail id created-at"
    "thumbnail periodo updated-at"
    "thumbnail status .";
}

.grid-field {
  @apply flex items-center gap-x-4;
}

.grid-field-icon {
  @apply size-5 text-muted-foreground;
}

.area-thumbnail {
  grid-area: thumbnail;
}

.area-id {
  grid-area: id;
}

.area-periodo {
  grid-area: periodo;
}

.area-status {
  grid-area: status;
}

.area-created-at {
  grid-area: created-at;
}

.area-updated-at {
  grid-area: updated-at;
}
</style>
