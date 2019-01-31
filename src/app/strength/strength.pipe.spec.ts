import { StrengthPipe } from "./strength.pipe";

describe('StrengthPipe', () => {
    let pipe = new StrengthPipe();

    it('should display weak if strength is 5', () => {
        // Act/Assert
        expect(pipe.transform(5)).toEqual('5 (weak)');
    })

    it('should display string if strength is 10', () =>{
        // Act/Assert
        expect(pipe.transform(10)).toEqual('10 (strong)');
    })
})