import { render, screen, fireEvent } from '@testing-library/react';
import Post from '.';

describe('PostComments', () => {
    it('deve adicionar dois comentários na lista', () => {
    render(<Post />);

    const input = screen.getByTestId('comment-input') as HTMLTextAreaElement;
    const button = screen.getByTestId('comment-button');

    fireEvent.change(input, { target: { value: 'Primeiro comentário' } });
    fireEvent.click(button);

    fireEvent.change(input, { target: { value: 'Segundo comentário' } });
    fireEvent.click(button);

    const comments = screen.getAllByTestId('comment');
    expect(comments).toHaveLength(2);
    expect(comments[0]).toHaveTextContent('Primeiro comentário');
    expect(comments[1]).toHaveTextContent('Segundo comentário');
  });
});
