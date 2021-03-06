import dbQuery from '../db/dbQuery.js';
import {
  errorMessage, successMessage, status,
} from '../helpers/status.js';

const getAllCandidates = async (req, res) => {
    const getAllCandidatesQuery = 'SELECT * FROM "Candidates"';
    try {
      const { rows } = await dbQuery.query(getAllCandidatesQuery);
      
      const dbResponse = rows;
      if (dbResponse[0] === undefined) {
        errorMessage.error = 'There are no Candidates';
        return res.status(status.notfound).send(errorMessage);
      }
      successMessage.data = dbResponse;
      return res.status(status.success).send(successMessage);
    } catch (error) {
      errorMessage.error = 'An error Occured';
      console.log(error);
      return res.status(status.error).send(errorMessage);
    }
  };

  export {
      getAllCandidates,
  }