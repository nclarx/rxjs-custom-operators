import {Observable} from 'rxjs'

/***
 * RxJS operator which truncates a string based on `n` characters
 * @param maxLength a character or characters which replaces the space character
 *
 */
export default (maxLength: number) => (source: Observable<string>) =>
    new Observable<string>(observer => {
        return source.subscribe({
            next(value) {
                if (maxLength && value.length > maxLength) {
                    observer.next(value.slice(0, maxLength))
                } else {
                    observer.next(value)
                }
            },
            error(err) {
                observer.error(err)
            },
            complete() {
                observer.complete()
            }
        })
    })

