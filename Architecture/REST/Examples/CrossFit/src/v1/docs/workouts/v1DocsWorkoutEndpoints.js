/**
 * @openapi
 * /api/v1/workouts:
 *   get:
 *     tags:
 *       - Workouts
 *     parameters:
 *       - $ref: "../common/v1DocsCommonParams#/parameters/page"  
 *       - $ref: "../common/v1DocsCommonParams#/parameters/sort"   
 *     responses:
 *       200:
 *         description: JSON array of workout objects
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items: 
 *                     $ref: "../workouts/v1DocsWorkoutComponents#/components/schemas/Workout"
 *       5XX:
 *         description: failed to get the workout objects
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "../common/v1DocsCommonComponents#/components/schemas/endpointHandlingError"
 *                       
 */