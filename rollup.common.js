var typescript = require('rollup-plugin-typescript');

module.exports = {
    entry: './src/main.ts',
    dest: './dist/main.js',
    format: 'cjs',
    plugins: [
        typescript({
            "allowUnreachableCode": false,
            "allowUnusedLabels": false,
            "declaration": true,
            "forceConsistentCasingInFileNames": true,
            "inlineSourceMap": false,
            "newLine": "LF",
            "noEmit": true,
            "noFallthroughCasesInSwitch": true,
            "noImplicitAny": true,
            "noImplicitReturns": true,
            "noImplicitUseStrict": true,
            "noUnusedLocals": true,
            "preserveConstEnums": false,
            "removeComments": true,
            "rootDir": "src",
            "sourceMap": false,
            "strictNullChecks": true,
            "suppressImplicitAnyIndexErrors": true,
            "target": "es5",
            "typescript": require('typescript')
        })
    ]
};
