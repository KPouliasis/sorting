describe('Merge Sort', function(){

  it('has merge function that merges two sorted arrays', function(){
    expect( merge([1, 3, 5], [2, 4])).toEqual( [1, 2, 3, 4, 5] );
  });

  it('handles an empty array', function(){
    expect( mergeSort([]) ).toEqual( [] );
  });
  it('handles a singleton', function(){
    expect( mergeSort([1]) ).toEqual( [1] );
  });
  before(function(){
    spyOn(window,'merge').and.callThrough();
  });

  it('sorts arrays from least to greatest', function(){
    expect( mergeSort([3,2,1]) ).toEqual( [1, 2, 3] );
    expect( window.merge.calls.count()).toEqual(2);
  });

  it('sorts characters in alphabetical order, regardless of case', function(){
    expect( mergeSort(['z', 'a', 'w']) ).toEqual( ['a', 'w', 'z'] );
  });

  it('sorts strings in alphabetical order, regardless of case', function(){
    expect( mergeSort(['zane', 'anna', 'wilson']) ).toEqual( ['anna', 'wilson', 'zane'] );
  });
});
