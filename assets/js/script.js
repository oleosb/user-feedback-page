let range = document.querySelector('#range')
let root = document.querySelector(':root')
let btn = document.querySelector('.send-btn')
let container = document.querySelector('.container')
let container2 = document.querySelector('.container2')
let feedback = document.querySelector('.feedback > span')
let label = document.querySelector('label')

range.addEventListener('input', (e) => {
        let inptValue = +e.target.value

        let rangeWidth = getComputedStyle(e.target).getPropertyValue('width')
        let labelWidth = getComputedStyle(label).getPropertyValue('width')

        let rangeNum = +rangeWidth.substring(0, rangeWidth.length - 2)
        let labelNum = +labelWidth.substring(0, labelWidth.length - 2)

        let maxRange = +e.target.max
        let minRange = +e.target.min

        let left = inptValue * (rangeNum / maxRange) - labelNum / 2 + scale(inptValue, minRange, maxRange, 10, -10)
        
        label.style.left = `${left}px`

        innerLabel(label, inptValue)
})

let scale = (num, in_min, in_max, out_min, out_max) => {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}

 function innerLabel(label,inptValue) {
        if (inptValue >= 0 && inptValue < 20) {
                label.innerHTML = 'Péssimo'
                root.style.setProperty('--range-color', '#ff565f')
        } else if (inptValue >= 20 && inptValue < 40) {
                label.innerHTML = 'Ruim'
                root.style.setProperty('--range-color', '#ff8446')
        } else if (inptValue >= 40 && inptValue < 60) {
                label.innerHTML = 'Neutro'
                root.style.setProperty('--range-color', '#fed018')
        }else if (inptValue >= 60 && inptValue < 80) {
                label.innerHTML = 'Bom'
                root.style.setProperty('--range-color', '#9ed872')
        } else if(inptValue >= 80) {
                label.innerHTML = 'Excelente'
                root.style.setProperty('--range-color', '#64ca64')
        }
}

btn.addEventListener('click', () => {
        feedback.innerHTML = label.innerHTML
        container.classList.remove('show')
        container2.classList.add('show')
})