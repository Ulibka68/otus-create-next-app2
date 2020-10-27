заменить пакет на 
next-optimized-images-fork-by-ulibka

Вариант 1:
Кроме того, в вашей папке custom_typings (если есть) вы можете добавить новый файл import-png.d.ts:


declare module "*.png" {
const value: string;
export default value;
}


для импорта изображений в TS надо установить:
install requireJS (or was it commonJS)

Заменить старый кусок в 
\node_modules\next-optimized-images\lib\loaders\responsive-loader.js
на

  if (!adapter && detectedLoaders.responsiveAdapter === 'sharp') {
    adapter = require(`${detectedLoaders.responsive.split('lib')[0]}sharp`); // <-- new one
  }

  if (!adapter && detectedLoaders.responsiveAdapter === 'sharp') {
    console.log('wrong :')
    console.log(`${detectedLoaders.responsive}${path.sep}sharp`)
    console.log('right :')
    console.log(`${detectedLoaders.responsive.split('lib')[0]}sharp`)
    // adapter = require(`${detectedLoaders.responsive}${path.sep}sharp`); // eslint-disable-line
    adapter = require(`${detectedLoaders.responsive.split('lib')[0]}sharp`); // <-- new one
  }
