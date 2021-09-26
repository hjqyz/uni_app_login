<template>
	<view class="container">
		<view class="title">
			<image class="icon" src="../../static/img/title_icon.png"></image>
			<image class="titleImg" src="../../static/img/title.png"></image>
		</view>
		<view class='home'>
			<swiper indicator-dots circular autoplay interval=3000>
				<swiper-item v-for="(item,index) in swipers" :key="index">
					<image :src="item"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="fncArea">
			<view v-for="item in fnc_list" :key='item'>
			{{item}}
			</view>
		</view>
	</view>
</template>

<script>
var imgRequest = require("../../api/index.js");
	export default {
		data() {
			return {
				swipers: [],
				fnc_list:['签到','发帖'],
			}
		},
	mounted() {
		let count=0;
		this.imgGet(count)
	},
	methods: {
		imgGet(count){
			if(count>1){return}
			imgRequest.baseRequest('https://www.dmoe.cc/random.php?return=json','GET','').then(res=>{
				count++
			 this.swipers.push(res.imgurl)
			 this.imgGet(count)
			});
		}
	},
	}
</script>

<style lang="scss">
	$screen-height:1334rpx;

	.container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: flex-end;
		width: 100%;
		.home{
				swiper{
					width: 750rpx;
				}
				image{
					width: 100%;
					height: 100%;
				}
			}
			.title{
				width: 100%;
				text-align: center;
				background-color: black;
				position: relative;
				.icon{
					height: 50px;
					width: 80px;
					object-fit: contain;
					position: absolute;
					top: 0px;
					left: -8px;
				}
				.titleImg{
					margin-left: 20px;
					object-fit: contain;
					height: 50px;
				}
			}
			.fncArea{
				width: 100%;
				height: 200px;
				border: 1px #21A5E6 solid;
				margin-top: 20px;
				display: flex;
			}
	}
</style>
