const path = require('path')
module.exports = {
	webpack: {
		alias: {
			'@components': path.resolve(__dirname, 'src/components'),
			'@state': path.resolve(__dirname, 'src/state'),
			'@utils': path.resolve(__dirname, 'src/utils'),
			'@public': path.resolve(__dirname, 'public'),
		},
	},
}
