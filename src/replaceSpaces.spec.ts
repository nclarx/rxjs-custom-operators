import replaceSpaces     from './replaceSpaces'
import {from, of}        from 'rxjs'
import {take, takeWhile} from 'rxjs/operators'

test('the observable emits a string with spaces replaced with underscores', done => {
    const data = ['Red Letter', 'Blue Bow', 'Green Lute', 'Yellow Fellow']
    const data$ = from(data)
    let index = 0
    let lastValue = data[index]
    data$
        .pipe(
            replaceSpaces('_'),
            takeWhile(() => index < data.length)
        ).subscribe({
        next: (val) => {
            expect(val).toBe(lastValue.split(' ').join('_'))
            index = index + 1
            lastValue = data[index]
        },
        complete: () => done()
    })
})