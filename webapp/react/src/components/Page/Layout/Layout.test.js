/*
 * Copyright (c) 2020. Denis Rendler <connect@rendler.me>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { render } from '@testing-library/react';

import Layout from './Layout';

describe('it renders a layout', () => {

  test('renders empty layout', () => {
    const { getByTestId } = render(<Layout classes={['test', 'classes']} attrs={{'data-testid': 'empty'}} />);
    const layout        = getByTestId('empty');

    expect(layout).toBeInTheDocument();
    expect(layout).toMatchInlineSnapshot(`
      <div
        class="test classes"
        data-testid="empty"
      >
        <p>
          This is an empty layout!
        </p>
      </div>
   `);
  });

  test('renders layout with children', () => {
    const { getByTestId } = render(<Layout classes={['test', 'classes']} attrs={{'data-testid': 'with-children' }}><p>test child of layout</p></Layout>);
    const layout        = getByTestId('with-children');

    expect(layout).toBeInTheDocument();
    expect(layout).toMatchInlineSnapshot(`
      <div
        class="test classes"
        data-testid="with-children"
      >
        <p>
          test child of layout
        </p>
      </div>
   `);
  });

  test('renders layout can receive any attribute', () => {
    const { getByTestId } = render(<Layout classes={['test', 'classes']} attrs={{'test-attr': 'test-attr-val', 'data-testid': 'with-attr' }} />);
    const layout        = getByTestId('with-attr');

    expect(layout).toBeInTheDocument();
    expect(layout).toMatchInlineSnapshot(`
      <div
        class="test classes"
        data-testid="with-attr"
        test-attr="test-attr-val"
      >
        <p>
          This is an empty layout!
        </p>
      </div>
   `);
  });

});
