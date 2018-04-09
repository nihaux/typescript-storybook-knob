import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';

interface Props {
  someText: string;
};

const MyComp: React.SFC<Props> = ({ someText }: Props) => (
  <div>{someText}</div>
);

storiesOf('Test', module)
  .addDecorator(withKnobs)
  .add('with text', () => <MyComp someText="test" />);
