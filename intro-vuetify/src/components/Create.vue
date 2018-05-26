<template>
  <ProductForm :product="product"
    :onsubmit="submit"></ProductForm>
</template>

<script>
import API from '@/lib/API';
import ProductForm from '@/components/ProductForm';

export default {
  components: {
    ProductForm
  },
  data() {
    return {
      product: {
        title: '',
        description: '',
        price: 0,
        quantity: 0,
        image: ''
      }
    };
  },
  methods: {
    submit() {
      this.product.quantity = Number(this.product.quantity);
      API.createProduct(this.product).then(({ id }) => {
        this.$router.push({
          name: 'Product',
          params: {
            id: id
          }
        });
      });
    }
  }
};
</script>

<style>
</style>
