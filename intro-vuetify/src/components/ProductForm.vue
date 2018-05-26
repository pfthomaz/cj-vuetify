<template>
  <v-layout>
    <v-flex>
      <v-form ref="form"
        v-model="valid">
        <v-text-field label="Title"
          v-model="product.title"
          :rules="titleRules"
          required> </v-text-field>
        <v-text-field label="Description"
          v-model="product.description"
          multi-line> </v-text-field>
        <v-text-field label="Price"
          v-model="product.price"
          prefix="$"
          :rules="priceRules"
          required> </v-text-field>
        <v-text-field label="Quantity"
          v-model="product.quantity"
          :rules="quantityRules"
          required> </v-text-field>
        <v-text-field label="Image"
          v-model="product.image"
          :rules="imageRules"
          required> </v-text-field>
        <v-btn @click="submit">submit</v-btn>
        <v-btn @click="clear">clear</v-btn>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['product', 'onsubmit'],
  data() {
    return {
      valid: false,
      titleRules: [
        title => {
          return title.trim() != '' || 'Title must not be empty.';
        }
      ],
      priceRules: [
        price => {
          if (isNaN(price)) return 'Price must be a valid number.';
          if (Number(price) <= 0) return 'Price must be greater than $0.';
          return true;
        }
      ],
      quantityRules: [
        quantity => {
          if (isNaN(quantity)) return 'Quantity must be a valid number.';
          if (Number(quantity) < 0) return 'Quantity must be 0 or greater.';
          return true;
        }
      ],
      imageRules: [
        image => {
          return image.trim() != '' || 'Image must not be empty.';
        }
      ]
    };
  },
  methods: {
    submit() {
      if (this.valid) {
        this.onsubmit();
      }
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style>
</style>
