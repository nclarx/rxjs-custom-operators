import {of}           from 'rxjs'
import truncateString from './truncateString'

test('the observable emits a string truncated to 10 characters', done => {
    const data = `antidisestabishmentarianism`
    const data$ = of(data)
    data$
        .pipe(
            truncateString(10)
        ).subscribe({
        next: (val) => {
            expect(val).toBe('antidisest')
        },
        complete: () => done()
    })
})

