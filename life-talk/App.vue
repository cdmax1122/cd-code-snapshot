<script>
export default {
  onLaunch() {
    console.log('Life Talk launched')
  }
}
</script>

<style lang="scss">
@import '@/uni.scss';

page {
  background: var(--lt-bg);
  color: var(--lt-text-primary);
  font-family: 'Trebuchet MS', 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

view,
text,
button {
  box-sizing: border-box;
}

button::after {
  border: none;
}
</style>
