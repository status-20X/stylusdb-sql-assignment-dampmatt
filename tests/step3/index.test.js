const parseQuery = require('../../src/queryParser');

test('Parse SQL Query', () => {
    const query = 'SELECT id, name FROM sample';
    const parsed = parseQuery(query);
    expect(parsed).toEqual({
       "whereClauses": [],
        fields: ['id', 'name'],
        table: 'sample'
    });
});