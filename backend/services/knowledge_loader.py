from pathlib import Path

import pandas as pd


KNOWLEDGE_DIR = Path(__file__).resolve().parents[1] / "data" / "knowledge"


def load_knowledge(role: str):
    knowledge_path = KNOWLEDGE_DIR / f"{role}.csv"

    if not knowledge_path.exists():
        raise FileNotFoundError(f"Knowledge file not found for role '{role}': {knowledge_path}")

    return pd.read_csv(knowledge_path).to_dict(orient="records")
