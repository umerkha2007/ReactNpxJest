import { render } from '@testing-library/react';

import SampleReactAppUiShared from './sample-react-app-ui-shared';

describe('SampleReactAppUiShared', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SampleReactAppUiShared />);
    expect(baseElement).toBeTruthy();
  });
});
