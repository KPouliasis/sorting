describe('Bubble Sort', function(){

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles a singleton', function(){
    expect( bubbleSort([1]) ).toEqual( [1] );
  });

  it('sorts arrays from least to greatest', function(){
    expect( bubbleSort([3,2,1]) ).toEqual( [1, 2, 3] );
  });

  it('sorts characters in alphabetical order, regardless of case', function(){
    expect( bubbleSort(['z', 'a', 'w']) ).toEqual( ['a', 'w', 'z'] );
  });

  it('sorts strings in alphabetical order, regardless of case', function(){
    expect( bubbleSort(['zane', 'anna', 'wilson']) ).toEqual( ['anna', 'wilson', 'zane'] );
  });

});
