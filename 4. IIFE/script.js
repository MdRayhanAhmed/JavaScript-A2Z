//1.
let paintColor = 'Red'
const paint = (() => {
    return {
        changeColorToBlue: () => {
            paintColor = 'Blue'
            console.log(paintColor)
            return paintColor
        },
        changeColorToGreen: () => {
            paintColor: 'Green';
            return paintColor
        }
    }
})();
console.log(paint.changeColorToBlue());
console.log(paint.changeColorToGreen())


//-----------------------------------------------------

//----------------------------------------------------
//3



