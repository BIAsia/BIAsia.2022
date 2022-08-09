import curDot from 'cursor-dot'

const cursor = curDot({
    zIndex: 2,
    diameter: 8,
    borderWidth: 2,
    borderColor: 'rgba(210,196,147,1)',
    easing: 12,
    background: 'rgba(210,196,147,1)'
})

cursor.over(".section-m", {
    scale: 10,
    background: '#000',
    borderColor: '#000',
})

cursor.over("a", {
    scale: 10,
    borderWidth: 1,
    borderColor: 'rgba(210,196,147,1)',
    background: '#000'
})
