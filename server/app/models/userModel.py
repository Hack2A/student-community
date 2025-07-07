from app import cursor, db

def create_user(data):
    query = """
        INSERT INTO users (name, email, password, college, branch, batch, skills, bio, github, linkedin)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
    """
    values = (
        data['name'], data['email'], data['password'], data.get('college'),
        data.get('branch'), data.get('batch'), data.get('skills'),
        data.get('bio'), data.get('github'), data.get('linkedin')
    )
    cursor.execute(query, values)
    db.commit()

def get_user_by_email(email):
    cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
    return cursor.fetchone()
