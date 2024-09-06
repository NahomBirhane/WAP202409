interface IKeyPair {
    readonly key: number;
    value?: string;
}

const keypair1: IKeyPair = {
    key: 123,
    value: 'hello'
};
console.log(keypair1.key);
// keypair1.key = 345;

const keypair2: IKeyPair = {
    key: 3456
}
