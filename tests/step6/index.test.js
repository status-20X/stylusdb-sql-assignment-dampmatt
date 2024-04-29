const {parseSelectQuery} = require('../../src/queryParser');
test('Parse SQL Query with WHERE Clause', () => {
    const query = 'SELECT id, name FROM student WHERE age = 25';
    const parsed = parseSelectQuery(query);
    expect(parsed).toEqual({
        fields: ['id', 'name'],
        table: 'student',
        whereClauses: [{
            "field": "age",
            "operator": "=",
            "value": "25",
        }],
        joinCondition: null,
        joinTable: null,
        joinType: null,
        groupByFields : null,
        hasAggregateWithoutGroupBy: false,
        orderByFields: null,
        "limit": null,
        isDistinct:false,
    });
});

const {executeSELECTQuery} = require('../../src/index');
test('Execute SQL Query with Multiple WHERE Clause', async () => {
    const query = 'SELECT id, name FROM student WHERE age = 30 AND name = John';
    const result = await executeSELECTQuery(query);
    expect(result.length).toBe(1);
    expect(result[0]).toEqual({ id: '1', name: 'John' });
});