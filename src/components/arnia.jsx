export default function Arnia({nome, posizione}) {
    return (
        
    <div className="border p-4 mb-2">
        <p><strong>Nome:</strong> {nome}</p>
        <p><strong>Coordinate:</strong> {posizione}</p>
    </div>
        
    )
}