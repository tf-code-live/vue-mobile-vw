module.exports = {
	devServer: {
		open: true
	},
    lintOnSave: process.env.NODE_ENV === 'development',
	productionSourceMap: process.env.NODE_ENV === 'development',
	css: {
		// 定制vant主题，若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
		loaderOptions: {
			less: {
				// lessOptions: {
					modifyVars: {
					// 'font-size-sm': '13px',
					// 'font-size-md': '15px',
					// 或者可以通过 less 文件覆盖（文件路径为绝对路径）
					// hack: `true; @import "your-less-file-path.less";`,
					}
				// }
			}
		}
	},
    chainWebpack: config => {
        // 开启eslint，在开发环境运行时自动修复
		config.module
			.rule('eslint')
			.use('eslint-loader')
			.tap(options => {
				options.fix = true
				return options
			})
	}
}