<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const goToAfter = () => router.push("/after");

const onScroll = () => {
  alert("scroll");
};
onMounted(() => window.addEventListener("scroll", onScroll));
</script>

<template>
  <div>スクロールのイベントをリスナーを登録した（スクロールしてみてください）</div>
  <button @click="goToAfter">次へ</button>
  <div>あ</div>
  <div>い</div>
  <div>う</div>
  <div>え</div>
  <div>お</div>
  <div>か</div>
  <div>き</div>
  <div>く</div>
  <div>け</div>
  <div>こ</div>
  <div>さ</div>
  <div>し</div>
  <div>す</div>
  <div>せ</div>
  <div>そ</div>
  <div>た</div>
  <div>ち</div>
  <div>つ</div>
  <div>て</div>
  <div>と</div>
  <div>な</div>
  <div>に</div>
  <div>ぬ</div>
  <div>ね</div>
  <div>の</div>
  <div>は</div>
  <div>ひ</div>
  <div>ふ</div>
  <div>へ</div>
  <div>ほ</div>
  <div>ま</div>
  <div>み</div>
  <div>む</div>
  <div>め</div>
  <div>も</div>
  <div>や</div>
  <div>ゆ</div>
  <div>よ</div>
  <div>ら</div>
  <div>り</div>
  <div>る</div>
  <div>れ</div>
  <div>ろ</div>
  <div>わ</div>
  <div>を</div>
  <div>ん</div>
  <div>あ</div>
  <div>い</div>
  <div>う</div>
  <div>え</div>
  <div>お</div>
  <div>か</div>
  <div>き</div>
  <div>く</div>
  <div>け</div>
  <div>こ</div>
  <div>さ</div>
  <div>し</div>
  <div>す</div>
  <div>せ</div>
  <div>そ</div>
  <div>た</div>
  <div>ち</div>
  <div>つ</div>
  <div>て</div>
  <div>と</div>
  <div>な</div>
  <div>に</div>
  <div>ぬ</div>
  <div>ね</div>
  <div>の</div>
  <div>は</div>
  <div>ひ</div>
  <div>ふ</div>
  <div>へ</div>
  <div>ほ</div>
  <div>ま</div>
  <div>み</div>
  <div>む</div>
  <div>め</div>
  <div>も</div>
  <div>や</div>
  <div>ゆ</div>
  <div>よ</div>
  <div>ら</div>
  <div>り</div>
  <div>る</div>
  <div>れ</div>
  <div>ろ</div>
  <div>わ</div>
  <div>を</div>
  <div>ん</div>
</template>

<style scoped></style>
