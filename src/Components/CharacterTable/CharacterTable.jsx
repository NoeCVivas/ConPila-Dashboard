import { Table, Badge } from 'react-bootstrap';

export default function CharacterTable({ characters }) {
  return (
    <Table className="dark-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Especie</th>
          <th>Estado</th>
          <th>Avatar</th>
        </tr>
      </thead>

      <tbody>
        {characters.map(character => (
          <tr key={character.id}>
            <td>
              <span className="id-badge">
                {character.id}
              </span>
            </td>

            <td className="user-name">
              {character.name}
            </td>

            <td>
              {character.species}
            </td>

            <td>
              <Badge
                bg={
                  character.status === 'Alive'
                    ? 'success'
                    : character.status === 'Dead'
                      ? 'danger'
                      : 'secondary'
                }
              >
                {character.status}
              </Badge>
            </td>

            <td>
              <img
                src={character.image}
                alt={character.name}
                className="avatar-img"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}