<template>
    <div>
        <router-view></router-view>
        <van-tabbar v-model="active" route active-color="#1fb860" inactive-color="#333333">
            <van-tabbar-item replace to="/home" name="home" icon="home-o">录入</van-tabbar-item>
            <van-tabbar-item replace to="/search" name="search" icon="search">查询</van-tabbar-item>
            <van-tabbar-item replace to="/profile" name="friends" icon="friends-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'Home',
    data () {
        return {
            active: 'home'
        }
    }
}
</script>

<style lang="less" scoped>
</style>
