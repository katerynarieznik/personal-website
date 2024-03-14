module.exports = {
  tailwindFunctions: ['clsx', 'cn', 'cva'],
  tabWidth: 2, // indent_size = 2
  useTabs: false, // indent_style = space
  endOfLine: 'lf', // end_of_line = lf
  semi: false, // default: true
  singleQuote: true, // default: false
  trailingComma: 'es5',
  bracketSpacing: true,
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],
}
