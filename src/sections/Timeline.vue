<template>
  <div class="q-px-lg q-pb-md">
    <q-timeline color="secondary">
      <q-timeline-entry heading>
        Timeline
      </q-timeline-entry>

      <q-timeline-entry>
        <template v-slot:title>
          Joined
        </template>
        <template v-slot:subtitle>
          February 22, 1986
        </template>

        <div>
          I ma happy to be here
        </div>
      </q-timeline-entry>

      <q-timeline-entry icon="delete">
        <template v-slot:title>
        Reached 500 Posts
        </template>
        <template v-slot:subtitle>
          February 21, 1986
        </template>

        <div>
        An awesome achievement
        </div>

      </q-timeline-entry>
    </q-timeline>
  </div>
</template>
