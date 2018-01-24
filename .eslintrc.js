const isProd = !!(
	process.env.NODE_ENV === 'production' ||
	process.env.BABEL_ENV === 'production'
);

module.exports = {
	root: true,
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true,
		},
	},
	extends: ['plugin:react/recommended'],
	plugins: ['react'],
	rules: {
		'react/no-unescaped-entities': 0,
		'no-console': 1,
		'no-debugger': isProd ? 2 : 1,
		'no-unused-vars': [
			isProd ? 2 : 1,
			{
				vars: 'local',
				args: 'after-used',
				ignoreRestSiblings: true,
			},
		]
	},
};
