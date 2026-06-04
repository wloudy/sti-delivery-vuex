<script setup>
import { steps } from '../data/content'
import CtaBanner from '../components/CtaBanner.vue'
</script>

<template>
  <v-sheet color="secondary" class="py-16">
    <v-container>
      <h1 class="text-h3 font-weight-black title-font text-center mb-12">
        За 3 клика
      </h1>

      <v-stepper alt-labels non-linear flat color="transparent" bg-color="transparent">
        <v-stepper-header>
          <template v-for="(step, i) in steps" :key="step.title">
            <v-stepper-item
              :value="i + 1"
              :title="step.title"
              :subtitle="step.text"
              color="primary"
              complete
            />
            <v-divider v-if="i < steps.length - 1" />
          </template>
        </v-stepper-header>
      </v-stepper>

      <v-timeline side="end" class="mt-12 d-md-none">
        <v-timeline-item
          v-for="(step, i) in steps"
          :key="step.title"
          :dot-color="'primary'"
          size="small"
        >
          <div class="font-weight-bold">{{ i + 1 }}. {{ step.title }}</div>
          <div class="text-medium-emphasis text-body-2">{{ step.text }}</div>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </v-sheet>

  <CtaBanner />
</template>
