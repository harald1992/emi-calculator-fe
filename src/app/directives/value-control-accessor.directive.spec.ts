import { ValueControlAccessorDirective } from './value-control-accessor.directive';

describe('ValueControlAccessorDirective', () => {
  const directive = new ValueControlAccessorDirective();

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('Should _handleInputEvent', () => {
    directive.lastValue = '123';
    directive._handleInputEvent('125');
    expect(directive.lastValue).toBe('125');
  });
});
