const { calculateAverageScore, getHighestScoringStudent, fetchEnrolledStudents, filterPassedQuizResults } = require('../src/learning');

/**
 * calculateAverageScore
 */
test('[VALID] average score of [2] is 2', () => {
    const quizResults = [{ score: 2 }]
    const result = calculateAverageScore(quizResults);
    expect(result).toBe(2);
});

test('[INVALID] empty quizResults return 0', () => {
    const quizResults = []
    const result = calculateAverageScore(quizResults);
    expect(result).toBe(0);
});

/**
 * getHighestScoringStudent
 */
test('[VALID] Leonardo has the highest score', () => {
    const quizResults = [
        { student: 'Leonardo', score: 10 },
        { student: 'Raphaello', score: 9 },
        { student: 'Donatello', score: 8 },
        { student: 'Michelangelo', score: 7 },
    ]
    const result = getHighestScoringStudent(quizResults);
    expect(result).toBe('Leonardo');
});

test('[INVALID] Highest score is null', () => {
    const quizResults = []
    const result = getHighestScoringStudent(quizResults);
    expect(result).toBeNull();
});

/**
 * fetchEnrolledStudents
 */
describe('fetchEnrolledStudents',  () => {
    
    test('[VALID] fetch enrolled students', async() => {
        const apiServiceStub = {
            getEnrolledStudents: () => {
                return [
                    { id: 1, student: 'Leonardo', status:'inactive', score: 10 },
                    { id: 2, student: 'Raphaello', status:'active', score: 9 },
                    { id: 3, student: 'Donatello', status:'inactive', score: 8 },
                    { id: 4, student: 'Michelangelo', status:'active', score: 7 },
                ]
            }
        }

        const result = await fetchEnrolledStudents(apiServiceStub)
        expect(result).not.toBeNull();
    });
})

/**
 * filterPassedQuizResults
 */
test('[VALID] no results higher than the passing score', () => {
    const quizResults = [{ score: 2 }]
    const passingScore = 5
    const result = filterPassedQuizResults(quizResults);
    expect(result).toEqual([]);
});


//