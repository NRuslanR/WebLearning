/**
 * @openapi
 * parameters:
 *   page:
 *     in: query
 *     name: page
 *     description: a page of entities
 *     schema:
 *       type: object
 *       properties:
 *         page:
 *           type: integer
 *         count:
 *           type: integer
 *   sort:
 *     in: query
 *     name: sort
 *     description: the sort options
 *     schema:
 *       type: array
 *       items:
 *         type: string
 */