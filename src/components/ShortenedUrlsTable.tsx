import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper } from '@mui/material';

interface UrlData {
  id: string;
  shortenedUrl: string;
  originalUrl: string;
  clicks: number;
  createdAt: string;
}

interface UrlTableProps {
  data: UrlData[];
  onDelete: (id: string) => void;
}

const UrlTable: React.FC<UrlTableProps> = ({ data, onDelete }) => {

  return (
    <TableContainer
      component={Paper}
      sx={{
        backgroundColor: '#2e3036', 
        color: 'white', 
        border: '1px solid #37383f', 
        borderRadius: '4px', 
        overflowX: 'auto',
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                color: '#ffffff', 
                fontWeight: 'bold', 
                backgroundColor: '#444951', 
                border: '1px solid #37383f',
              }}
            >
              Shortened URL
            </TableCell>
            <TableCell
              sx={{
                color: '#ffffff',
                fontWeight: 'bold',
                backgroundColor: '#444951',
                border: '1px solid #37383f',
              }}
            >
              Original URL
            </TableCell>
            <TableCell
              sx={{
                color: '#ffffff',
                fontWeight: 'bold',
                backgroundColor: '#444951',
                border: '1px solid #37383f',
              }}
            >
              Clicks
            </TableCell>
            <TableCell
              sx={{
                color: '#ffffff',
                fontWeight: 'bold',
                backgroundColor: '#444951',
                border: '1px solid #37383f',
              }}
            >
              Created At
            </TableCell>
            <TableCell
              sx={{
                color: '#ffffff',
                fontWeight: 'bold',
                backgroundColor: '#444951',
                border: '1px solid #37383f',
              }}
            >
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
        
              <TableCell
                sx={{
                  color: 'white !important', 
                  border: '1px solid #37383f',
                  maxWidth: '200px', 
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap', 
                }}
              >
                <a
                  href={row.shortenedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'white', textDecoration: 'underline' }}
                >
                  {row.shortenedUrl}
                </a>
              </TableCell>

              <TableCell
                sx={{
                  color: 'white !important', 
                  border: '1px solid #37383f',
                  maxWidth: '300px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap', 
                }}
              >
                <a
                  href={row.originalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'white', textDecoration: 'underline' }} 
                >
                  {row.originalUrl}
                </a>
              </TableCell>

              <TableCell
                sx={{
                  color: 'white !important', 
                  border: '1px solid #37383f',
                }}
              >
                {row.clicks}
              </TableCell>
              <TableCell
                sx={{
                  color: 'white !important',
                  border: '1px solid #37383f',
                }}
              >
                {row.createdAt}
              </TableCell>

              <TableCell
                sx={{
                  border: '1px solid #37383f',
                }}
              >
                <Button color="error" onClick={() => onDelete(row.shortenedUrl.split('/').pop() as string)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UrlTable;
