import sum from "../sum";
test("Sum function should calculate the sum of two numbers", ()=>{
    const result = sum(3,2);
    expect(result).toBe(5);
})